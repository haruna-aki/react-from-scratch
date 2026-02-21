import { PageWrapper } from './components/PageWrapper.jsx'
import { Container } from './components/Container.jsx'
import { Header } from './components/Header.jsx'
import { Search } from './components/Search.jsx'
import { Shortlist } from './components/Shortlist.jsx'
import { CatsList } from './components/CatsList.jsx'
import { NewCatsForm } from './components/NewCatsForm.jsx'
 
export function App() {
    return(
        <PageWrapper>
            <Container>
                <Header />
                <Main/>
                {/* cats list */}
                {/* new kittens form */}
            </Container>
        </PageWrapper>
    )
}

function Main() {
    return(
        <main>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                <Search />
                <Shortlist />
            </div>
            <CatsList />
            <NewCatsForm />
        </main>
    )
}