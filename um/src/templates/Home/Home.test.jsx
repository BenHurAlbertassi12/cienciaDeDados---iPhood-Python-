import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from './Home';

const hendlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'sunt aut',
          body: 'quia et',
        },
        {
          userId: 2,
          id: 2,
          title: 'qui est esse',
          body: 'est reru',
        },
        {
          userId: 3,
          id: 3,
          title: 'ea molestias',
          body: 'et iusto',
        },
      ]),
    );
  }),
];
const server = setupServer(...hendlers);

describe('<Home/>', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and loadmore', async () => {
    render(<Home />);
    const text = screen.getByText('Peço desculpas, nada foi encontrado');
    await waitForElementToBeRemoved(text);
  });
});
