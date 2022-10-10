import styled, { css } from 'styled-components';

const ButtonTypeVariations = {
  primary: css`
    background-color: var(--color-primary);
    border: 1px solid var(--color-secondary);

    &:hover {
      background-color: var(--color-secondary);
    }
  `,
  secondary: css`
    background-color: var(--color-secondary);
    color: #fff;
  `,
  error: css`
    background-color: var(--color-error);
  `,
};

export const Container = styled.button`
  ${({ variant }) => ButtonTypeVariations[variant || 'primary']}

  width: 300px;

  .primary {
  }

  .secondary {
  }

  .error {
  }
`;
