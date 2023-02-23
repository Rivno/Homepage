import logoAzure from '../../../../public/cv/tech/azure.svg';
import logoDocker from '../../../../public/cv/tech/docker.svg';
import logoGraphql from '../../../../public/cv/tech/graphql.svg';
import logoJs from '../../../../public/cv/tech/javascript.svg';
import logoKafka from '../../../../public/cv/tech/kafka.svg';
import logoNestJs from '../../../../public/cv/tech/nestjs.svg';
import logoNodeJs from '../../../../public/cv/tech/nodejs.svg';
import logoReact from '../../../../public/cv/tech/react.svg';
import logoRust from '../../../../public/cv/tech/rust.svg';
import logoSignalR from '../../../../public/cv/tech/signalr.svg';
import logoTypescript from '../../../../public/cv/tech/typescript.svg';

const MAP_TECH: Record<string, any> = {
  azure: logoAzure,
  docker: logoDocker,
  graphql: logoGraphql,
  javascript: logoJs,
  kafka: logoKafka,
  nestjs: logoNestJs,
  nodejs: logoNodeJs,
  reactjs: logoReact,
  rust: logoRust,
  signalr: logoSignalR,
  typescript: logoTypescript,
};

export const getTechLogo = (tech: string) => {
  return MAP_TECH[tech.toLowerCase()];
};
