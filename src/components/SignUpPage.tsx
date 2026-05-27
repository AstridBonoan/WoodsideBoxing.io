import { Footer } from './Footer'
import { AuthField, AuthSubmit, AuthSwitchLink } from './AuthForm'
import { SectionHeader } from './SectionHeader'

export function SignUpPage() {
  return (
    <>
      <main className="min-h-screen bg-charcoal pb-16 pt-24">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            label="Account"
            title="Sign Up"
            description="Create your account to join the gym."
          />

          <form
            className="mt-10 space-y-4 rounded-sm border border-white/10 bg-matte p-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <AuthField id="signup-name" label="Full Name" autoComplete="name" />
            <AuthField id="signup-email" label="Email" type="email" autoComplete="email" />
            <AuthField id="signup-password" label="Password" type="password" autoComplete="new-password" />
            <AuthSubmit label="Sign Up" />
            <AuthSwitchLink prompt="Already have an account?" href="#signin" label="Sign In" />
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
