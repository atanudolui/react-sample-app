import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe("RegistrationForm", () => {
    const initialState = { userData: { data: []} };
    const mockStore = configureStore();

    test("Form submission", async() => {
        let store = mockStore(initialState);
        render(<Provider store={store}><App /></Provider>)
        
        const noUser = screen.getByText(/No User/i);
        expect(noUser).toBeInTheDocument();

        const nameInput = await screen.getByLabelText('Name', {
            name: 'userName'
        });
        userEvent.clear(nameInput);
        userEvent.type(nameInput, "Atanu Dolui");
        
        const emailInput = await screen.getByLabelText('Email', {
            name: 'email'
        });
        userEvent.clear(emailInput);
        userEvent.type(emailInput, "dolui.atanu@gmail.com");

        const button = await screen.getByRole('button');
        userEvent.click(button);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})
