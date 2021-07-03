import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/64d58efce2.js"
          crossOrigin="anonymous"
        ></script>
        <title>Sistema de reservación</title>
      </Head>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Inicia sesión</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Usuario" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" value="Iniciar" className="btn solid" />
              <p className="social-text">Iniciar con plataformas sociales</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Registrarse</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Usuario" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Correo electrónico" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" className="btn" value="Registrar" />
              <p className="social-text">Registrarse con plataformas sociales</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Eres nuevo ?</h3>
              <p>
                Puedes crear tu cuenta en este instante para comenzar a reservar!!
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Registrar
              </button>
            </div>
            <img src="/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Ya tienes una cuenta ?</h3>
              <p>
               Inicia sesión para gestionar tus reservas!
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Iniciar
              </button>
            </div>
            <img src="/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
