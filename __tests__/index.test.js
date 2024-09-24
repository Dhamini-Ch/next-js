import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DashboardPage from '/app/dashboard/(overview)/page.tsx'

describe('Dashboard Page', () => {
  it('renders the main heading', async () => {
    render(<DashboardPage />);
    
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Dashboard');
  });
});