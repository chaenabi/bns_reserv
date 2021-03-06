package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import dao.TeamDAO;
import vo.TeamDTO;


@WebServlet("/teamidcheckServ")
public class TeamIdcheckServ extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("application/json; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
 		//response.addHeader("Access-Control-Allow-Origin", "*");  
 		//response.setHeader("Access-Control-Allow-Headers", "origin, x-requested-with, content-type, accept");
		// 내장객체 application, session, out
		//ServletContext application = this.getServletContext();
		//HttpSession session = request.getSession();
		//PrintWriter out = response.getWriter();
		// 파라미터 인코딩
		request.setCharacterEncoding("utf-8");
		//KakaoDTO kvo = new KakaoDTO();
		//KakaoDAO kdao = new KakaoDAO();	
		TeamDTO tvo = new TeamDTO();
		TeamDAO tdao = new TeamDAO();


		//sale_register.jsp 팀ID 중복체크
		String team_name = request.getParameter("team_name");
		tvo.setTeam_name(team_name);
		boolean tn_duplicate = tdao.search_tn(team_name);
		System.out.println("tn_duplicate : " + tn_duplicate);
	
		 if(tn_duplicate == true) {
			 JSONObject cannot = new JSONObject();
			 cannot.put("result","true"); 
			response.getWriter().print(cannot);
		}
		else if(tn_duplicate == false) {
			JSONObject okay = new JSONObject();
			okay.put("result","false"); 			
			response.getWriter().print(okay);
			
		}
		 
 		 response.getWriter().close();
	}
	
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
