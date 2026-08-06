'use client';

import { useSiteUi } from './Layout';

type Props = {
  label?: string;
  className?: string;
};

export default function EnquireButton({
  label = 'Get started',
  className = 'btn btnPrimary',
}: Props) {
  const { openEnquiry } = useSiteUi();
  return (
    <button type="button" className={className} onClick={openEnquiry}>
      {label}
    </button>
  );
}
