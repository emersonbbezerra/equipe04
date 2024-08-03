const emailTemplateAdmin = (user) => `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Gestores</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
    </head>
    <body style="background-color: #F0F0F0;">
      <center>
        <table style="width: 600px; background-color: #fff; vertical-align: middle;" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th colspan="2">
                <img src="https://servidor-estatico-eight-murex.vercel.app/banner2.png" alt="banner código certo coders" style="width: 100%;">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2" style="padding: 0 30px;">
                <h1 style="font-family: Rubik, sans-serif; font-size: 24px; font-weight: 400;">
                  Olá, <strong style="font-weight: 500; color: #D53535;">Gestor da Comunidade!</strong>
                </h1>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px;">
                <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px;">
                <h3 style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
                  Acabamos de receber mais um interessado em fazer parte da nossa Comunidade
                  como <strong style="font-weight: 500; color: #D53535;">${
                    user.tipo === "mentor" ? "Mentor" : "Voluntário"
                  }!</strong>😃
                </h3>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 24px 30px; font-family: Roboto, sans-serif; font-size: 22px; font-weight: 400;">
                <strong style="font-weight: 700; color: #D53535;">${
                  user.nome
                }</strong>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
                <strong style="font-weight: 700; color: #D53535; font-size: 18px;">Email:</strong>
                ${user.email}
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
                <strong style="font-weight: 700; color: #D53535; font-size: 18px;">Telefone:</strong>
                ${user.telefone}
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
                <strong style="font-weight: 700; color: #D53535; font-size: 18px;">País:</strong>
                ${user.pais}.
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
              <strong style="font-weight: 700; color: #D53535; font-size: 18px;">Função Pretendida:</strong>
                ${user.funcaoPretendida}.
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
              <strong style="font-weight: 700; color: #D53535; font-size: 18px;">Disponibilidade:</strong>
                ${user.disponibilidade}.
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
              <strong style="font-weight: 700; color: #D53535; font-size: 18px;">Linkedin:</strong>
                <a href="${user.linkedin}" style="color: #000;">${
  user.linkedin
}</a>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
              <strong style="font-weight: 700; color: #D53535; font-size: 18px;">Deseja Liderar?</strong>
                ${user.liderar ? "Sim" : "Não"}.
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0 30px 16px 30px; font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
              <strong style="font-weight: 700; color: #D53535; font-size: 18px;">Tempo de Experiência:</strong>
                ${user.experiencia || "Nenhuma"}.
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 16px 30px 40px 30px;">
                <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
              </td>
            </tr>
          </tbody>

        </table>
      </center>
    </body>
    </html>
  `;

module.exports = emailTemplateAdmin;
