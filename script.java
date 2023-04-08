import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

@WebServlet("/contact")
public class ContactServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;

  public ContactServlet() {
    super();
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // Lendo o JSON enviado pelo formulário
    String requestBody = request.getReader().lines().reduce("", (accumulator, actual) -> accumulator + actual);
    JSONObject data = new JSONObject(requestBody);

    // Imprimindo os dados recebidos no console
    System.out.println("CNPJ: " + data.getString("cnpj"));
    System.out.println("Email: " + data.getString("email"));
    System.out.println("Mensagem: " + data.getString("message"));

    // Respondendo ao cliente
    response.setContentType("text/plain");
    response.setCharacterEncoding("UTF-8");
    response.getWriter().write("Dados recebidos com sucesso!");
  }

}
