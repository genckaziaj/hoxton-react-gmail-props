import { Email } from "../components/Email";

export function Emails({ getFilteredEmails, emails, setEmails }: any) {
  return (
    <main className="emails">
      <ul>
        {getFilteredEmails.map((email: any, index: any) => (
          <Email
            email={email}
            index={index}
            emails={emails}
            setEmails={setEmails}
          />
        ))}
      </ul>
    </main>
  );
}
