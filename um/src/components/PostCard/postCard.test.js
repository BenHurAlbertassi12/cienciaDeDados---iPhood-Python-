import { render, screen } from "@testing-library/react"
import { PostCard } from "./PostCard"
import { mock } from "../../utils/mock"

const mocks = mock

describe('<postCard />', () => {
    it('shoul render PostCard cprrectly', () => {
        render(<PostCard {...mocks} />)

        expect(screen.getByRole('img', {name: 'title 1'})).toBeInTheDocument()


    })
})