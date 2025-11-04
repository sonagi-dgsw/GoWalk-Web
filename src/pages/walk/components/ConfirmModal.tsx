import React from "react";
import {
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalSubText,
  ButtonBox,
  CancelButton,
  ConfirmButton,
} from "../styles/styles";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  title,
  message,
  onCancel,
  onConfirm,
}) => {
  if (!open) return null; // 표시 안할 때는 렌더링 X

  return (
    <ModalOverlay>
      <ModalBox>
        <div>
          <ModalTitle>{title}</ModalTitle>
          {message && <ModalSubText>{message}</ModalSubText>}
        </div>

        <ButtonBox>
          <CancelButton onClick={onCancel}>취소하기</CancelButton>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
        </ButtonBox>
      </ModalBox>
    </ModalOverlay>
  );
};

export default ConfirmModal;
