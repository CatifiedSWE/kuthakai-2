'use client';

import React from 'react';
import { RentalRequest } from '@/demo/requests';

interface RequestCardProps {
  request: RentalRequest;
  onAccept?: (id: string) => void;
  onDecline?: (id: string) => void;
}

export default function RequestCard({ request, onAccept, onDecline }: RequestCardProps) {
  if (request.status === 'accepted') {
    return (
      <div
        className="flex flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark p-4 shadow-sm opacity-60"
        data-testid="request-card"
      >
        <div className="flex items-start gap-4">
          <img
            className="aspect-square rounded-full h-14 w-14 object-cover"
            alt={`Portrait of ${request.requesterName}`}
            src={request.requesterAvatar}
          />
          <div className="flex flex-1 flex-col">
            <p className="text-base font-bold text-text-primary-light dark:text-text-primary-dark leading-normal">
              {request.requesterName}
            </p>
            <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark leading-normal pt-1">
              {request.itemName}
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-normal">
              {request.startDate} - {request.endDate}
            </p>
          </div>
          <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-green-100 dark:bg-green-900/50 px-3">
            <p className="text-green-800 dark:text-green-300 text-xs font-bold leading-normal">
              Accepted
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark p-4 shadow-sm"
      data-testid="request-card"
    >
      <div className="flex items-start gap-4">
        <img
          className="aspect-square rounded-full h-14 w-14 object-cover"
          alt={`Portrait of ${request.requesterName}`}
          src={request.requesterAvatar}
        />
        <div className="flex flex-1 flex-col">
          <p className="text-base font-bold text-text-primary-light dark:text-text-primary-dark leading-normal">
            {request.requesterName}
          </p>
          <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark leading-normal pt-1">
            {request.itemName}
          </p>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-normal">
            {request.startDate} - {request.endDate}
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 justify-end">
        <button
          onClick={() => onDecline?.(request.id)}
          className="flex min-w-[100px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-button-secondary-light dark:bg-button-secondary-dark text-text-primary-light dark:text-text-primary-dark text-base font-bold leading-normal tracking-wide hover:opacity-80 transition-opacity"
          data-testid="decline-button"
        >
          <span className="truncate">Decline</span>
        </button>
        <button
          onClick={() => onAccept?.(request.id)}
          className="flex min-w-[100px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-md shadow-primary/30 hover:bg-primary/90 transition-colors"
          data-testid="accept-button"
        >
          <span className="truncate">Accept</span>
        </button>
      </div>
    </div>
  );
}
