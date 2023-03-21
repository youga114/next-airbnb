import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import { authActions } from "../store/auth";
import palette from "../styles/palette";
import AuthModal from "./auth/AuthModal";

const Container = styled.div`
    .header-auth-buttons {
        .header-sign-up-button {
            height: 42px;
            margin-right: 8px;
            padding: 0 16px;
            border: 0;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                background-color: ${palette.gray_f7};
            }
        }
        .header-login-button {
            height: 42px;
            padding: 0 16px;
            border: 0;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
            }
        }
    }
    .modal-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        .modal-background {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.75);
            z-index: 10;
        }
        .modal-contents {
            width: 400px;
            height: 400px;
            background-color: white;
            z-index: 11;
        }
    }
`;

const HeaderAuths: React.FC = () => {
    const { openModal, closeModal, ModalPortal } = useModal();

    const dispatch = useDispatch();

    return (
        <Container>
            <div className="header-auth-buttons">
                <button
                    type="button"
                    className="header-sign-up-button"
                    onClick={() => {
                        dispatch(authActions.setAuthMode("signup"));
                        openModal();
                    }}
                >
                    회원가입
                </button>
                <button
                    type="button"
                    className="header-login-button"
                    onClick={() => {
                        dispatch(authActions.setAuthMode("login"));
                        openModal();
                    }}
                >
                    로그인
                </button>
            </div>
            <ModalPortal>
                <AuthModal closeModal={closeModal} />
            </ModalPortal>
        </Container>
    );
};

export default HeaderAuths;
