import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalContainer = ({ children, handleModalClose }) => {
    const [modalClose, setModalClose] = useState(false);

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            handleModalClose();
        }
    };

    // 모달이 열렸을 때 바깥쪽 페이지 스크롤 없애는 함수
    useEffect(() => {
        if (!modalClose) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [modalClose]);

    if (modalClose) return null;

    return createPortal(
        <>
            {!modalClose && (
                <Container onClick={handleModalClick}>
                    <Modal onClick={(e) => e.stopPropagation()}>{children}</Modal>
                </Container>
            )}
        </>,
        document.body,
    );
};

export default ModalContainer;

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: var(--black200);
    border-radius: 8px;
    overflow: hidden;
`;
