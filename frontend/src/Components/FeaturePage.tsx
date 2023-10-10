import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const FeatureItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  const slideIn = useSpring({
    transform: inView ? "translateX(0)" : "translateX(-50px)",
    config: { duration: 800 },
  });

  const scaleIn = useSpring({
    transform: inView ? "scale(1)" : "scale(0.8)",
    config: { duration: 800 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...fadeIn, ...slideIn, ...scaleIn }}
      className="feature-item mb-8"
    >
      <h2 className="text-richtextdark text-2xl font-bold mb-2">{title}</h2>
      <p className="text-textdark">{description}</p>
    </animated.div>
  );
};

const FeaturePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 800 },
  });

  return (
    <div className="bg-bgdark flex flex-col h-full mt-8">
      <div className="feature-content h-full w-[80%] mx-auto mt-20">
        <div className="text-center">
          <span className="text-textdark text-4xl text-center font-thin">
            Features We Offer
          </span>
          <hr className="border-t-2 border-orange-500 my-4" />
        </div>
        <div className="feature-section w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pt-[5%]">
          <FeatureItem
            title="Skill Profiles"
            description="Users can create profiles showcasing their skills, expertise, andthe services
            they can offer."
          />
          <FeatureItem
            title="Skill Listings:"
            description="Individuals can post listings for the skills they are looking to acquire or the
            services they need."
          />
          <FeatureItem
            title="Messaging System:"
            description="System to facilitate communication between users for
            arranging skill exchanges."
          />
          <FeatureItem
            title="Rating and Reviews:"
            description="We allow users to rate and review each other based on their
            experiences with the skill exchange."
          />
          <FeatureItem
            title="Skill Categories:"
            description="Categorize skills into different categories (e.g., programming design,
              language implementation) for easier navigation."
          />
          <FeatureItem
            title="Virtual Skill Sessions:"
            description="Offer the option for virtual skill exchange sessions through video calls or
            screen sharing."
          />
          <FeatureItem
            title="Skill Progress Tracker."
            description="Users can track their progress and showcase
            achievements on their profiles."
          />
          <FeatureItem
            title="Community Challenges:"
            description="Community challenges or events where users can participate
            and showcase their Skills and build trust."
          />
          <FeatureItem
            title="SkillSwap Marketplace:"
            description="A place where users can offer and exchange physical
            goods or services in addition to skills."
          />
        </div>
        <br />
        <div className="bg-bgdark flex flex-col h-full mt-8">
            <div ref={ref} className="flex justify-center gap-4 pb-5">
              <animated.div style={slideUp} className="flex items-center">
                <span role="img" aria-label="Feature Icon">
                  🚀
                </span>
                <p className="text-textdark ml-2">Accelerated Growth</p>
              </animated.div>
              <animated.div style={slideUp} className="flex items-center">
                <span role="img" aria-label="Feature Icon">
                  🌐
                </span>
                <p className="text-textdark ml-2">Global Reach</p>
              </animated.div>
              <animated.div style={slideUp} className="flex items-center">
                <span role="img" aria-label="Feature Icon">
                  🎓
                </span>
                <p className="text-textdark ml-2">Educational Content</p>
              </animated.div>
              <animated.div style={slideUp} className="flex items-center">
                <span role="img" aria-label="Feature Icon">
                  💬
                </span>
                <p className="text-textdark ml-2">Interactive Discussions</p>
              </animated.div>
            </div>
          </div>
        </div>  
      </div>
  );
};

export default FeaturePage;
