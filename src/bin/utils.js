import ora from 'ora';

export const validName = (name) => {
  if (!/^[a-z0-9-._~]+$/.test(name)) {
    ora().warn(
      ` Invalid project name: "${name}"; Project names can only contain lowercase letters, numbers, and the characters -._~.`,
    );
  }
};
