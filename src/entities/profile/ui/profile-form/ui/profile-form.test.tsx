import { screen } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import { profileMock } from 'shared/config/tests/mocks/entities';

import ProfileForm from './profile-form';

describe('test entities/profile-form', () => {
  it('be in the document', () => {
    renderWithAll(<ProfileForm profile={profileMock} />);
    expect(screen.getByTestId('profile-entity')).toBeInTheDocument();
  });

  it('text fields: disabled', async () => {
    renderWithAll(<ProfileForm profile={profileMock} />);
    const fields = await screen.findAllByTestId('text-field-input');
    fields.forEach((field) => expect(field).toBeDisabled());
  });

  it('text fields: not disabled', async () => {
    renderWithAll(
      <ProfileForm
        profile={profileMock}
        isDisabled={false}
        formEvents={{
          onChangeDigitField: jest.fn(),
          onChangeTextField: jest.fn(),
          onSelectCountryField: jest.fn(),
        }}
      />,
    );

    const fields = await screen.findAllByTestId('text-field-input');
    fields.forEach((field) => expect(field).not.toBeDisabled());
  });
});
