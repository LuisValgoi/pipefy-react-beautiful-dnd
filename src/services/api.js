import uuid from "uuid/dist/v4";

export const list_data = () => {
  return {
    [`column-${uuid()}`]: {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: uuid(),
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: uuid(),
          content: "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: uuid(),
          content: "Estudar módulo 03 de React Native",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: uuid(),
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#54e1f7"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: uuid(),
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
      ],
    },
    [`column-${uuid()}`]: {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: uuid(),
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
      ],
    },
    [`column-${uuid()}`]: {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: uuid(),
          content: "Gravar sobre Geolocalização e mapas com React Native",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: uuid(),
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: uuid(),
          content: "Ajustes na biblioteca unform",
          labels: [],
        },
      ],
    },
    [`column-${uuid()}`]: {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: uuid(),
          content: "Gravar aula sobre deploy e CI com React Native",
          labels: [],
        },
        {
          id: uuid(),
          content: "Gravar testes e deploy ReactJS",
          labels: ["#54e1f7"],
        },
        {
          id: uuid(),
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#7159c1"],
        },
      ],
    },
  };
};
