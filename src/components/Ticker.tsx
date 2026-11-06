import React from 'react';

const TICKER_ITEMS = [
  'Direção criativa',
  'Styling editorial',
  'Consultoria de imagem',
  'Produção de moda',
  'Alta-costura',
  'Identidade visual',
  'Narrativas em preto e branco',
  'Curadoria de desfile',
];

export const Ticker: React.FC = () => {
  return (
    <section className="overflow-hidden bg-[var(--ink-color)] py-4 text-[#F3EFE7] border-y border-black">
      <div className="flex select-none">
        <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
          {TICKER_ITEMS.map((item, index) => (
            <span key={`t1-${index}`} className="flex items-center gap-6 text-xs uppercase tracking-[0.24em] font-medium text-[#F3EFE7]">
              <span>{item}</span>
              <span className="text-[#888888] text-[0.6rem]" aria-hidden="true">✱</span>
            </span>
          ))}
          {TICKER_ITEMS.map((item, index) => (
            <span key={`t2-${index}`} className="flex items-center gap-6 text-xs uppercase tracking-[0.24em] font-medium text-[#F3EFE7]">
              <span>{item}</span>
              <span className="text-[#888888] text-[0.6rem]" aria-hidden="true">✱</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
