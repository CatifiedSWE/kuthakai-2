'use client';

import React, { useState } from 'react';
import RequestCard from '../components/RequestCard';
import RequestsEmptyState from '../components/RequestsEmptyState';
import { RentalRequest } from '@/demo/requests';

interface RequestsApprovalsScreenProps {
  initialRequests: RentalRequest[];
}

export default function RequestsApprovalsScreen({
  initialRequests,
}: RequestsApprovalsScreenProps) {
  const [requests, setRequests] = useState<RentalRequest[]>(initialRequests);

  const handleAccept = (id: string) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'accepted' as const } : req))
    );
    console.log('Accepted request:', id);
  };

  const handleDecline = (id: string) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'declined' as const } : req))
    );
    console.log('Declined request:', id);
  };

  const pendingRequests = requests.filter((req) => req.status === 'pending');
  const hasNoPendingRequests = pendingRequests.length === 0;

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark"
      data-testid="requests-approvals-screen"
    >
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-border-light dark:border-border-dark">
        <div className="text-text-primary-light dark:text-text-primary-dark flex size-12 shrink-0 items-center justify-start -ml-2">
          <span
            className="material-symbols-outlined cursor-pointer"
            style={{ fontSize: '28px', fontVariationSettings: "'FILL' 0, 'wght' 500" }}
          >
            arrow_back
          </span>
        </div>
        <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Requests & Approvals
        </h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      {/* Requests List */}
      <main className="flex flex-1 flex-col gap-4 px-4 py-6">
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        ))}

        {/* Empty State */}
        {hasNoPendingRequests && <RequestsEmptyState />}
      </main>
    </div>
  );
}
