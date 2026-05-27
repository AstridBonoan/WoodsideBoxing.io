import { Footer } from './Footer'
import { AuthField, AuthSubmit, AuthSwitchLink } from './AuthForm'
import { SectionHeader } from './SectionHeader'

export function SignInPage() {
  return (
    <>
      <main className="min-h-screen bg-charcoal pb-16 pt-24">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <SectionHeader centered label="Account" title="Sign In" description="Welcome back to Woodside Boxing Academy." />

          <form
            className="mt-10 space-y-4 rounded-sm border border-white/10 bg-matte p-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <AuthField id="signin-email" label="Email" type="email" autoComplete="email" />
            <AuthField id="signin-password" label="Password" type="password" autoComplete="current-password" />
            <AuthSubmit label="Sign In" />
            <AuthSwitchLink prompt="Don't have an account?" href="#signup" label="Sign Up" />
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
