import React from 'react';
import './styles.css';
import Header from '../../components/Header'
import {Link} from 'react-router-dom';

export default function Home () {
  return (
    <>
      <Header title="Bem vindo ao IGGLE">
        <li><Link to="/">Home</Link></li>
        <li><a href="/about_us">Sobre</a></li>
        <li><a href="/contact">Contato</a></li>
        <li><Link to="/login">Login</Link></li>
        <li><a href="/register">Cadastre-se</a></li>
        <li><a className="NewAdvertise" href="/new_advertise">Anunciar sala</a></li>
      </Header>
      <h1>Hello Iggle xxxx</h1>
    </>
  );
}