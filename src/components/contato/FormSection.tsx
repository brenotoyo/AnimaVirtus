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
    <section className="bg-anima-navy px-8 py-16">
      <div className="mx-auto flex max-w-7xl justify-center gap-60 text-center">
        {/* textos informativos */}
        <div className="w-1/2 text-start">
          <h4 className="mb-4 text-base uppercase tracking-widest text-anima-coral">
            FALE CONOSCO
          </h4>
          <h2 className="mb-6 font-serif text-7xl font-bold text-white">
            VAMOS DANÇAR JUNTOS
          </h2>
          <p className="mb-12 w-4/5 leading-relaxed text-white/70">
            Agende sua aula experimental ou tire dúvidas sobre matrículas,
            horários e modalidades. Será um prazer receber você.
          </p>
          {/* Lista de informações */}
          <ul>
            <li className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-anima-coral/15">
                <Image
                  src="/images/Icons/location.svg"
                  alt="Ícone de localização"
                  width={18}
                  height={18}
                />
              </div>
              <div>
                <h4 className="text-xs tracking-widest text-white/60">
                  ENDEREÇO
                </h4>
                <p className="text-sm text-white">
                  Rua Fictícia, 00 - Jardins, São Paulo - SP
                </p>
              </div>
            </li>
            <li className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-anima-coral/15">
                <Image
                  src="/images/Icons/phone.svg"
                  alt="Ícone de telefone"
                  width={18}
                  height={18}
                />
              </div>
              <div>
                <h4 className="text-xs tracking-widest text-white/60">
                  TELEFONE
                </h4>
                <p className="text-sm text-white">
                  (11) 4948-9484 - WhatsApp (11) 90000-0000
                </p>
              </div>
            </li>
            <li className="mb-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-anima-coral/15">
                <Image
                  src="/images/Icons/envelope.svg"
                  alt="Ícone de e-mail"
                  width={18}
                  height={18}
                />
              </div>
              <div>
                <h4 className="text-xs tracking-widest text-white/60">
                  E-MAIL
                </h4>
                <p className="text-sm text-white">exemplo@email.com.br</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-anima-coral/15">
                <Image
                  src="/images/Icons/clock.svg"
                  alt="Ícone de horários"
                  width={18}
                  height={18}
                />
              </div>
              <div>
                <h4 className="text-xs tracking-widest text-white/60">
                  HORÁRIOS
                </h4>
                <p className="text-sm text-white">
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
          className="w-1/2 rounded-sm bg-white px-8 pb-20 pt-10 text-start"
        >
          <h3 className="text-2xl font-semibold text-anima-navy">
            Envie uma mensagem
          </h3>
          <h4 className="mb-7 text-anima-navy/80">
            Respondemos em até um dia útil.
          </h4>

          {/* Mensagem de Sucesso */}
          {success && (
            <div className="mb-4 rounded-lg border-2 border-green-500 bg-green-100 p-4 text-sm text-green-700">
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
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="nome"
              className="mb-2 text-xs tracking-widest text-anima-navy/40"
            >
              NOME COMPLETO
            </label>
            <input
              id="nome"
              type="text"
              name="nome"
              placeholder="Seu Nome"
              className="border-2 border-gray-300 p-3 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
              required
              disabled={loading}
            />
          </div>

          {/* E-MAIL E TELEFONE */}
          <div className="mb-4 flex gap-3">
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-xs tracking-widest text-anima-navy/40"
              >
                E-MAIL
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="exemplo@email.com"
                className="border-2 border-gray-300 p-3 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                required
                disabled={loading}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <label
                htmlFor="telefone"
                className="mb-2 text-xs tracking-widest text-anima-navy/40"
              >
                TELEFONE
              </label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                placeholder="(11) 90000-0000"
                className="border-2 border-gray-300 p-3 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* MODALIDADE DE INTERESSE */}
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="modalidade"
              className="mb-2 text-xs tracking-widest text-anima-navy/40"
            >
              MODALIDADE DE INTERESSE
            </label>
            <select
              id="modalidade"
              name="modalidade"
              className="border-2 border-gray-300 p-3 text-sm text-anima-navy focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
              required
              disabled={loading}
            >
              <option value="">Selecione uma modalidade</option>
              <option value="Ballet Infantil (3 a 8 anos)">
                Ballet Infantil (3 a 8 anos)
              </option>
              <option value="Ballet Juvenil (9 a 16 anos)">
                Ballet Juvenil (9 a 16 anos)
              </option>
              <option value="Ballet Adulto (17+ anos)">
                Ballet Adulto (17+ anos)
              </option>
              <option value="Dança Contemporânea">Dança Contemporânea</option>
              <option value="Aula Experimental">Aula Experimental</option>
            </select>
          </div>

          {/* MENSAGEM */}
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="mensagem"
              className="mb-2 text-xs tracking-widest text-anima-navy/40"
            >
              MENSAGEM
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={6}
              className="resize-none border-2 border-gray-300 p-3 text-sm focus:border-anima-coral focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
              placeholder="Fale um pouco do que você procura..."
              disabled={loading}
            />
          </div>

          {/* BOTÃO ENVIAR */}
          <button
            type="submit"
            disabled={loading}
            className="mx-auto flex w-full items-center justify-center rounded-full bg-anima-navy p-3 text-xs tracking-widest text-white transition-all hover:bg-anima-navy/90 disabled:cursor-not-allowed disabled:opacity-50"
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
