"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";


const SetupPage = () => {
  /* 
  The line below doesn't work when you need to use it in useEffect
  const storeModal = useStoreModal();
  */
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return null;
}

export default SetupPage;