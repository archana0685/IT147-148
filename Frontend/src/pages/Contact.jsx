import styled from "styled-components";
import { useEffect } from "react";

const Contact = () => {
  
  useEffect(() => {

    window.scrollTo({
        top: 0,
      });

},[])

  return (
  <>
  <Wrapper> 
    <h2 className="common-heading">Contact page</h2>
    <div data-aos="fade-up"
     data-aos-duration="700">

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.36246167877!2d72.88241160000003!3d22.677546999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b3c654679bd%3A0x7fec0936b8b30f97!2sBlossom%20Aura!5e0!3m2!1sen!2sin!4v1703018630032!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/moqgawpg" method="post" className="contact-inputs">
          <input data-aos="fade-up"
     data-aos-duration="700" type="text" placeholder="USERNAME" name="username" required autoComplete="off" />

          <input data-aos="fade-up"
     data-aos-duration="700" type="email"  name="Email" placeholder="EMAIL" autoComplete="off" required  />

          <textarea data-aos="fade-up"
     data-aos-duration="700" name="Messages" cols="30" rows="10" autoComplete="off" placeholder="ENTER YOUR MESSAGE" required></textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>

  </Wrapper>

  </>
  )
  
};

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    input{
      font-size : 1.4rem;
      text-transform : none;
    }

    textarea{
      font-size : 1.4rem;
      text-transform : none;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            font-size : 1.6rem;
            letter-spacing : 1px;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
