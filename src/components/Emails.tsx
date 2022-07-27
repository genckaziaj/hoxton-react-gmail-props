import { Email } from "../components/Email";

export function Emails({ getFilteredEmails, emails, setEmails }: any) {
  return (
    <main className="emails">
      <ul>
        {getFilteredEmails.map((email: any, index: any) => (
          <Email
            key={index}
            emailFiltered={email}
            emails={emails}
            setEmails={setEmails}
          />
        ))}
      </ul>
    </main>
  );
}
