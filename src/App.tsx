import { PageWrapper } from './components/PageWrapper'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Shortlist } from './components/Shortlist'
import { CatsList } from './components/CatsList'
import { NewCatsForm } from './components/NewCatsForm'

import { cats } from './data/cats'
 
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
            <CatsList cats={cats} />
            <NewCatsForm />
        </main>
    )
}