"use client";

import Modal from "../ui/modal";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const RegisterModal = ({
  isOpen,
  onClose,
  onSwitchToSignIn,
}: RegisterModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 rounded mb-3"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded mb-4"
      />
      <button className="w-full bg-green-500 text-white py-2 rounded mb-2">
        Register
      </button>
      <p className="text-sm text-gray-500">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => {
            onClose();
            onSwitchToSignIn();
          }}>
          Sign In
        </span>
      </p>
    </Modal>
  );
};

export default RegisterModal;
