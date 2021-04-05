import { render, screen, fireEvent } from '@testing-library/react';
import HidePassword from './hidePassword';

test('test du rendu de affichage du mdp', () => {
    const mdp = "azerty123";
    render(<HidePassword>{ mdp }</HidePassword>);
    expect(screen.queryByText(mdp)).toBeNull();
    fireEvent.click(screen.getByLabelText('afficher mdp'));
    expect(screen.queryByText(mdp)).toBeInTheDocument();
})
