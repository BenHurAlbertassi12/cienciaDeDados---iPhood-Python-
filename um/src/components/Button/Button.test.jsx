import { render, screen } from "@testing-library/react"
import ButtonLoadMore from "./ButtonLoadMore"

describe('<buttonLoadMore />', () => {
    it('Should render the button with the text "LoadMorePosts"', () => {
        render(<ButtonLoadMore text='LoadMorePosts' />);

        const button = screen.getByRole('button', { name: /LoadMorePosts/i })
        expect(button).toBeInTheDocument()
    })
})