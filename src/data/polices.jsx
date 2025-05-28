export const policies = {
  privacy: {
    title: "Privacy Policy",
    content: (
      <>
        <p className="mb-2"><strong>Data Controller:</strong></p>
        <p className="mb-4">Olivia Strzelec<br />Contact: strzelecoliwia24@email.com</p>
        
        <p className="mb-2"><strong>Data Collection:</strong></p>
        <p className="mb-4">This portfolio does not collect any personal data. The only information stored locally is your language preference.</p>
        
        <p className="mb-2"><strong>Legal Basis:</strong></p>
        <p>Processing occurs under GDPR Article 6(1)(f) - legitimate interest (storing user preferences).</p>
      </>
    )
  },
  cookies: {
    title: "Cookie Policy",
    content: (
      <>
        <p className="mb-2"><strong>Cookies Used:</strong></p>
        <table className="w-full mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Purpose</th>
              <th className="text-left py-2">Duration</th>
              <th className="text-left py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">i18n_lang</td>
              <td className="py-2">Stores language preference</td>
              <td className="py-2">30 days</td>
              <td className="py-2">Essential</td>
            </tr>
          </tbody>
        </table>
        
        <p className="mb-2"><strong>Managing Cookies:</strong></p>
        <p>You can manage cookies in your browser settings:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Chrome: Settings → Privacy → Cookies</li>
          <li>Firefox: Options → Privacy → Cookies</li>
        </ul>
      </>
    )
  }
};