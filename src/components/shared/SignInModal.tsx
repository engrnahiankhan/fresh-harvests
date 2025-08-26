"use client";

import Modal from "../ui/modal";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const SignInModal = ({
  isOpen,
  onClose,
  onSwitchToRegister,
}: SignInModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="font-rubik font-semibold text-2xl text-[32px] my-6 text-custom-black text-center">
        Sign In
      </h2>

      <form action="signin" className="">
        <label htmlFor="email" className=""></label>
      </form>

      <p className="text-sm text-gray-500">
        Dont have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => {
            onClose();
            onSwitchToRegister();
          }}>
          Register
        </span>
      </p>
    </Modal>
  );
};

export default SignInModal;
