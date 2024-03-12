'use client';
import Image from 'next/image';
import * as React from 'react';
import underConstruction from './../../public/under_construction.gif';

export default function Page(): JSX.Element {
  return (
    <div
      style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}
    >
      <Image
        src={underConstruction}
        alt="under construction page"
        style={{ width: '100%', height: '100%', justifyContent: 'center' }}
      />
    </div>
  );
}
