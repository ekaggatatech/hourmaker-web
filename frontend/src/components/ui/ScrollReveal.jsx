import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/utils";

const VARIANT_CLASS = {
  fade: "reveal-fade",
  "fade-up": "reveal-fade-up",
  "fade-down": "reveal-fade-down",
  "fade-left": "reveal-fade-left",
  "fade-right": "reveal-fade-right",
  scale: "reveal-scale",
};

/**
 * Lightweight scroll-in wrapper. Uses CSS transitions + IntersectionObserver.
 * No animation libraries — keeps the site fast.
 */
export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 600,
  as: Tag = "div",
  threshold,
  rootMargin,
  once = true,
  style,
  ...props
}) {
  const { ref, isInView } = useInView({ threshold, rootMargin, once });
  const variantClass = VARIANT_CLASS[variant] || VARIANT_CLASS["fade-up"];

  return (
    <Tag
      ref={ref}
      className={cn(
        "reveal-base",
        variantClass,
        isInView && "reveal-visible",
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Stagger children: wraps each child so they animate in sequence.
 */
export function StaggerReveal({
  children,
  className = "",
  stagger = 80,
  variant = "fade-up",
  as: Tag = "div",
  childClassName = "",
  ...props
}) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <Tag className={className} {...props}>
      {items.map((child, index) => (
        <ScrollReveal
          key={child?.key ?? index}
          variant={variant}
          delay={index * stagger}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </Tag>
  );
}
