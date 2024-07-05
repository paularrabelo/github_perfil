import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);
    try {
        useEffect( () => {
            setEstaCarregando(true);
            fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout (() => {
                    setEstaCarregando(false);
                    setRepos (resJson);
                }, 3000);
            })
        }, [nomeUsuario]);
    }
    catch {(e) => {
        setErro(true);
        console.log(e);
    }}
    
    return (
        <div className="container">
            {erro && (
                <h2>Nome de usuário não encontrado</h2>
            )}
            {estaCarregando ? (
                <h1>Carregando ...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({id, name, language, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listItemName}>
                                <b>Nome: </b> {name}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem: </b> {language}
                            </div>
                            <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;