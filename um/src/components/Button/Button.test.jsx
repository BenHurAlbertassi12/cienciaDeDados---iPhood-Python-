import { render, screen } from "@testing-library/react"
import ButtonLoadMore from "./ButtonLoadMore"
import userEvent from "@testing-library/user-event";

describe('<buttonLoadMore />', () => {
    it('Should render the button with the text "LoadMorePosts"', () => {
        render(<ButtonLoadMore text='LoadMorePosts' />);
        
        const button = screen.getByRole('button', { name: /LoadMorePosts/i })
        expect(button).toBeInTheDocument()
    })
    it('Should call function on button click', () => {
        const fn = jest.fn()
        render(<ButtonLoadMore text='LoadMorePosts' onClick={fn} />);
        
        const button = screen.getByRole('button', { name: /LoadMorePosts/i })

        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)
    })
})