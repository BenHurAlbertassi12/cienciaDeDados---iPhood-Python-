import { render, screen } from "@testing-library/react"
import { PostCard } from "./PostCard"
import { mock } from "../../utils/mock"

const mocks = mock

describe('<postCard />', () => {
    it('shoul render PostCard correctly', () => {
        render(<PostCard {...mocks} />)

        expect(screen.getByRole('img', { name: 'title 1' }))
            .toHaveAttribute('src', 'img/img.png')
        expect(screen.getByRole('heading', { name: 'title 1' }))
            .toBeInTheDocument()
        expect(screen.getByText('body 1',)).toBeInTheDocument()
    })
    it('should match snapshot', () => {
        const { container } = render(<PostCard {...mocks} />);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot();
    })
})