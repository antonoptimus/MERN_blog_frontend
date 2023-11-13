import React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import styles from "./Header.module.scss";
import ListAltIcon from "@mui/icons-material/ListAlt";
export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
            <a className={styles.logo} href="/">
            <ListAltIcon />
              MERN BLOG
            </a>
          <div className={styles.buttons}>
            <Button variant="outlined">Войти</Button>
            <Button variant="contained">Создать аккаунт</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
