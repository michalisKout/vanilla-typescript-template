import App from '@/App';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('App', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(<App />);
    expect(true).toBe(true);

    expect(baseElement).toMatchSnapshot();
  });

  it('should increment count', async () => {
    render(<App />);

    const button = document.querySelector('button');

    fireEvent.click(button!);

    await waitFor(() => {
      expect(screen.getByText('count is 1')).toBeInTheDocument();
    });
  });
});
