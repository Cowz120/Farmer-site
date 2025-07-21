'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Logout Modal Component
interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        router.push('/dashboard');
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, router]);

  if (!isOpen) return null;

  return (
    <div className="fixed   flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Are you sure you want to log out from the Livestock Platform?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={() => router.push('/dashboard')}
          >
            No
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            onClick={() => router.push('/')}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

// Home Page Component (Shows Modal)
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true); // Modal shown on load

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      <LogoutModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

// Login Page Component
export function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Login to Livestock Platform</h1>
      <p className="text-gray-600">Please log in to continue.</p>
    </div>
  );
}

// Dashboard Page Component
export function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Livestock Platform Dashboard</h1>
      <p className="text-gray-600">Welcome to your dashboard.</p>
    </div>
  );
}