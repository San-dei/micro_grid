import React from "react";
import Image from "next/image";
import styles from "../style/comercio.module.css";

const Comercio = () => {
  return (
    <>
      <div className={styles.comercioContainer}>
        <div className={styles.ventana1}>
          <div className={styles.textWrapper}>
            <div className={styles.alltext1}>
              <div className={styles.textComercial1}>
                Created and schedule content
              </div>
              <span className={styles.highlight1}>quicker</span>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/illustration-create-post.webp"
              alt="click button"
              width={140}
              height={70}
              className={styles.imageWrapper_img1}
            />
          </div>
        </div>

        <div className={styles.ventana2}>
          <div className={styles.textWrapper2}>
            <div className={styles.textComercial2}>
              Social Media <span className={styles.highlight2}>10x</span>
              Faster with AI
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/illustration-five-stars.webp"
              alt="click button"
              width={230}
              height={30}
              className={styles.imageWrapper_img2}
            />
          </div>
          <div className={styles.reviewText}>Over 4000 5-star reviews</div>
        </div>

        <div className={styles.ventana3}>
          <div className={styles.textWrapper3}>Schedule to Social Media</div>
          <div className={styles.imageWrapper}>
            <Image
              src="/illustration-schedule-posts.webp"
              alt="click button"
              width={250}
              height={170}
              className={styles.imageWrapper_img3}
            />
          </div>
          <div className={styles.description3}>
            Optimizing post timing to publish content at the perfect time for
            your audience
          </div>
        </div>

        <div className={styles.ventana5}>
          <div className={styles.imageWrapper5}>
            <Image
              src="/illustration-multiple-platforms.webp"
              alt="click button"
              width={170}
              height={60}
            />
          </div>
          <div className={styles.description5}>
            Manage multiple accounts and platforms
          </div>
        </div>

        <div className={styles.ventana6}>
          <div className={styles.textWrapper6}>
            <div className={styles.highlight6}>56%</div>
            <div className={styles.sub_highlight6}>faster audience growth</div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/illustration-audience-growth.webp"
              alt="click button"
              width={140}
              height={60}
            />
          </div>
        </div>

        <div className={styles.ventana7}>
          <div className={styles.textWrapper7}>
            Maintain a consistent posting schedule
          </div>
          <div className={styles.imageWrapper7}>
            <Image
              src="/illustration-consistent-schedule.webp"
              alt="click button"
              width={170}
              height={140}
              className={styles.imageWrapper_img7}
            />
          </div>
        </div>

        <div className={styles.ventana4}>
          <div className={styles.imageWrapper}>
            <Image
              src="/illustration-grow-followers.webp"
              alt="click button"
              width={170}
              height={120}
            />
          </div>
          <div className={styles.description4}>
            Grow followers with non-stop content
          </div>
        </div>

        <div className={styles.ventana8}>
          <div className={styles.textWrapper8}>With your content using AI</div>
          <div className={styles.imageWrapper8}>
            <Image
              src="/illustration-ai-content.webp"
              alt="click button"
              width={160}
              height={170}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comercio;
