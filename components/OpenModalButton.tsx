"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ProductEnquiryModal from "./EnquiryNowModal";

export default function OpenModalButton({ id, image }: { id: string, image: string }) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = (productId: string) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };
  return (
    <>
      <Button
        onClick={() => handleOpenModal(id)}
        className="mt-4 w-full bg-black text-white hover:bg-gray-800"
      >
        Send Enquiry
      </Button>
      <ProductEnquiryModal
      image={image}
        productId={selectedProductId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
