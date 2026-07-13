// src/components/contato/FormSection.tsx
'use client';

import Image from 'next/image';
import { useState, FormEvent, useRef, useEffect } from 'react';

export default function FormSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccess(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      telefone: formData.get('telefone'),
      modalidade: formData.get('modalidade'),
      mensagem: formData.get('mensagem'),
    };

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      let result;

      try {
        const text = await response.text();

        if (text) {
          result = JSON.parse(text);
        } else {
          throw new Error('Resposta vazia do servidor');
        }
      } catch {
        throw new Error(
          'Erro no servidor. Por favor, tente novamente mais tarde.',
        );
      }

      if (!response.ok) {
        throw new Error(result?.error || `Erro HTTP ${response.status}`);
      }

      // SUCESSO!
      setSuccess(true);
      setError('');

      if (formRef.current) {
        formRef.current.reset();
      }

      timeoutRef.current = setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err: unknown) {
      setSuccess(false);

      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Erro ao enviar mensagem. Tente novamente.';

      setError(errorMessage);

      timeoutRef.current = setTimeout(() => {
        setError('');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-anima-navy px-4 py-10 md:px-8 md:py-16 lg:px-32">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-8 text-center md:flex-row md:gap-16 lg:gap-60">
        {/* textos informativos */}
        <div className="w-full text-start md:w-1/2">
          <h4 className="mb-3 text-sm uppercase tracking-widest text-anima-coral md:mb-4 md:text-base">
            FALE CONOSCO
          </h4>
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-7xl">
            VAMOS DANÇAR JUNTOS
          </h2>
          <p className="mb-8 w-full leading-relaxed text-white/70 md:mb-12 md:w-4/5">
            Agende sua aula experimental ou tire dúvidas sobre matrículas,
            horários e modalidades. Será um prazer receber você.
          </p>
          {/* Lista de informações */}
          <ul className="space-y-4 md:space-y-5">
            <li className="flex items-center gap-3 md:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-anima-coral/15 md:h-10 md:w-10">
                <Image
                  src="/images/icons/location.svg"
                  alt="Ícone de localização"
                  width={16}
                  height={16}
                  className="md:h-[18px] md:w-[18px]"
                />
              </div>
              <div>
                <h4 className="text-[0.65rem] tracking-widest text-white/60 md:text-xs">
                  ENDEREÇO
                </h4>
                <p className="break-words text-xs text-white md:text-sm">
                  Rua Fictícia, 00 - Jardins, São Paulo - SP
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 md:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-anima-coral/15 md:h-10 md:w-10">
                <Image
                  src="/images/icons/phone.svg"
                  alt="Ícone de telefone"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <h4 className="text-[0.65rem] tracking-widest text-white/60 md:text-xs">
                  TELEFONE
                </h4>
                <p className="break-words text-xs text-white md:text-sm">
                  (11) 4948-9484 - WhatsApp (11) 90000-0000
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 md:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-anima-coral/15 md:h-10 md:w-10">
                <Image
                  src="/images/icons/envelope.svg"
                  alt="Ícone de e-mail"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <h4 className="text-[0.65rem] tracking-widest text-white/60 md:text-xs">
                  E-MAIL
                </h4>
                <p className="break-words text-xs text-white md:text-sm">
                  exemplo@email.com.br
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 md:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-anima-coral/15 md:h-10 md:w-10">
                <Image
                  src="/images/icons/clock.svg"
                  alt="Ícone de horários"
                  width={16}
                  height={16}
                />
              </div>
              <div>
                <h4 className="text-[0.65rem] tracking-widest text-white/60 md:text-xs">
                  HORÁRIOS
                </h4>
                <p className="break-words text-xs text-white md:text-sm">
                  Seg a Sex - 8h às 21h -- Sáb - 9h às 14h
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Formulário para contato */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full min-w-0 rounded-sm bg-white px-6 pb-12 pt-8 text-start md:w-1/2 md:px-8 md:pb-20 md:pt-10"
        >
          <h3 className="text-xl font-semibold text-anima-navy md:text-2xl">
            Envie uma mensagem
          </h3>
          <h4 className="mb-5 text-sm text-anima-navy/80 md:mb-7 md:text-base">
            Respondemos em até um dia útil.
          </h4>

          {/* Mensagem de Sucesso */}
          {success && (
            <div className="mb-4 rounded-lg border-2 border-green-500 bg-green-100 p-3 text-xs text-green-700 md:p-4 md:text-sm">
              <strong>✓ Mensagem enviada com sucesso!</strong>
              <br />
              Entraremos em contato em breve.
            </div>
          )}

          {/* Mensagem de Erro */}
          {error && (
            <div className="mb-4 rounded-lg border-2 border-red-500 bg-red-100 p-4 text-sm text-red-700">
              <strong>✕ {error}</strong>
            </div>
          )}

          {/* NOME COMPLETO */}
          <div className="mb-3 flex flex-col md:mb-4">
            <label
              htmlFor="nome"
              className="mb-1 text-[0.65rem] tracking-widest text-anima-navy/40 md:mb-2 md:text-xs"
            >
              NOME COMPLETO
            </label>
            <input
              id="nome"
              type="text"
              name="nome"
              placeholder="Seu Nome"
              className="border-2 border-gray-300 p-2 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 md:p-3"
              required
              disabled={loading}
            />
          </div>

          {/* E-MAIL E TELEFONE */}
          <div className="mb-3 flex flex-col gap-3 md:mb-4 md:flex-row">
            <div className="flex min-w-0 flex-1 flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-[0.65rem] tracking-widest text-anima-navy/40 md:mb-2 md:text-xs"
              >
                E-MAIL
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="exemplo@email.com"
                className="w-full border-2 border-gray-300 p-2 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 md:p-3"
                required
                disabled={loading}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <label
                htmlFor="telefone"
                className="mb-1 text-[0.65rem] tracking-widest text-anima-navy/40 md:mb-2 md:text-xs"
              >
                TELEFONE
              </label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                placeholder="(11) 90000-0000"
                className="w-full border-2 border-gray-300 p-3 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* MODALIDADE DE INTERESSE */}
          <div className="mb-3 flex min-w-0 flex-col md:mb-4">
            <label
              htmlFor="modalidade"
              className="mb-1 text-[0.65rem] tracking-widest text-anima-navy/40 md:mb-2 md:text-xs"
            >
              MODALIDADE DE INTERESSE
            </label>
            <select
              id="modalidade"
              name="modalidade"
              className="w-full border-2 border-gray-300 p-2 text-xs text-anima-navy focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 md:p-3 md:text-sm"
              required
              disabled={loading}
            >
              <option value="" className="text-xs md:text-sm">
                Selecione uma modalidade
              </option>
              <option
                value="Ballet Infantil (3 a 8 anos)"
                className="text-xs md:text-sm"
              >
                Ballet Infantil (3 a 8 anos)
              </option>
              <option
                value="Ballet Juvenil (9 a 16 anos)"
                className="text-xs md:text-sm"
              >
                Ballet Juvenil (9 a 16 anos)
              </option>
              <option
                value="Ballet Adulto (17+ anos)"
                className="text-xs md:text-sm"
              >
                Ballet Adulto (17+ anos)
              </option>
              <option
                value="Dança Contemporânea"
                className="text-xs md:text-sm"
              >
                Dança Contemporânea
              </option>
              <option value="Aula Experimental" className="text-xs md:text-sm">
                Aula Experimental
              </option>
            </select>
          </div>

          {/* MENSAGEM */}
          <div className="mb-4 flex flex-col md:mb-6">
            <label
              htmlFor="mensagem"
              className="mb-1 text-[0.65rem] tracking-widest text-anima-navy/40 md:mb-2 md:text-xs"
            >
              MENSAGEM
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              className="resize-none border-2 border-gray-300 p-2 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 md:p-3"
              placeholder="Fale um pouco do que você procura..."
              disabled={loading}
            />
          </div>

          {/* BOTÃO ENVIAR */}
          <button
            type="submit"
            disabled={loading}
            className="mx-auto flex w-full items-center justify-center rounded-full bg-anima-navy p-2.5 text-xs tracking-widest text-white transition-all hover:bg-anima-navy/90 disabled:cursor-not-allowed disabled:opacity-50 md:p-3"
          >
            {loading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                ENVIANDO...
              </>
            ) : (
              'ENVIAR MENSAGEM'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
