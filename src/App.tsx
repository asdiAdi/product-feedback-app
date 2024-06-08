import './global.css'
import Button from './components/Buttons/Button.tsx'
import BackButton from './components/Buttons/BackButton.tsx'
import UpvoteButton from './components/Buttons/UpvoteButton.tsx'
import TagButton from './components/Buttons/TagButton.tsx'
import TextField from './components/Forms/TextField.tsx'
import UpvoteDropdown from './components/Dropdowns/UpvoteDropdown.tsx'

function App() {
    return (
        <>
            <div>
                <Button type="1">Jopay</Button>
                <BackButton type="light" />
                <BackButton type="dark" />
                <UpvoteButton isActive={true} count={90} />
                <TagButton isActive={true}>Hello</TagButton>
            </div>
            <div>
                <TextField />
                <UpvoteDropdown />
            </div>
        </>
    )
}

export default App
