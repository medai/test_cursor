import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';
import { OverviewComponent } from './overview.component';
import { routes } from './app.routes';

describe('AppComponent E2E', () => {
  it('should render navigation and navigate to Contact page', async () => {
    await render(AppComponent, {
      imports: [RouterTestingModule.withRoutes(routes), ContactComponent, OverviewComponent],
    });
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    // Should show Overview page by default
    expect(screen.getByText(/overview page/i)).toBeInTheDocument();
    // Navigate to Contact
    await userEvent.click(screen.getByText('Contact'));
    expect(await screen.findByText(/contact page/i)).toBeInTheDocument();
  });
}); 