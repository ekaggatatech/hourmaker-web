import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "../lib/utils";

const HEADER_OFFSET = 72; // matches sticky header height

function FeatureTabList({
  features,
  activeId,
  onSelect,
  tabRefs,
  navRef,
  side = "left",
}) {
  return (
    <div className="h-full flex flex-col min-h-0">
      <nav
        ref={navRef}
        className="flex-1 overflow-y-auto no-scrollbar"
        aria-label={`${side} feature navigation`}
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          const isActive = activeId === feature.id;

          return (
            <button
              key={feature.id}
              type="button"
              ref={(el) => {
                tabRefs.current[feature.id] = el;
              }}
              onClick={() => onSelect(feature.id)}
              className={cn(
                "group flex items-center gap-2.5 w-full text-left px-2.5 py-2.5 border-0 border-b border-slate-200 transition-all duration-300 rounded-none",
                isActive
                  ? "bg-primary/10 text-primary border-b-primary font-semibold"
                  : "bg-transparent text-slate-600 hover:bg-slate-50 hover:text-primary-dark",
              )}
              aria-current={isActive ? "true" : undefined}
              title={feature.title}
            >
              <span
                className={cn(
                  "w-5 h-5 flex items-center justify-center shrink-0 rounded-none transition-colors duration-300",
                  isActive
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary/80",
                )}
              >
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="font-poppins font-medium text-[12px] leading-snug line-clamp-2 min-w-0">
                {feature.title}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

/**
 * Viewport-locked feature stage with clean split content cards.
 */
export default function ScrollFeatureShowcase({
  features = [],
  title = "Powerful Features We Provide",
  subtitle = "Everything you need to manage your workforce efficiently in one integrated platform",
}) {
  const [activeId, setActiveId] = useState(features[0]?.id ?? null);
  const panelRefs = useRef({});
  const tabRefs = useRef({});
  const leftNavRef = useRef(null);
  const rightNavRef = useRef(null);
  const contentRef = useRef(null);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef(null);

  const { leftFeatures, rightFeatures } = useMemo(() => {
    const mid = Math.ceil(features.length / 2);
    return {
      leftFeatures: features.slice(0, mid),
      rightFeatures: features.slice(mid),
    };
  }, [features]);

  // Scroll-based active sync (more reliable than IO with full-height panels)
  useEffect(() => {
    if (!features.length) return;
    const root = contentRef.current;
    if (!root) return;

    const updateActive = () => {
      if (isClickScrolling.current) return;

      const rootRect = root.getBoundingClientRect();
      const focusY = rootRect.top + rootRect.height * 0.28;

      let bestId = null;
      let bestScore = -Infinity;

      features.forEach((feature) => {
        const el = panelRefs.current[feature.id];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom <= rootRect.top || rect.top >= rootRect.bottom) return;

        const visibleTop = Math.max(rect.top, rootRect.top);
        const visibleBottom = Math.min(rect.bottom, rootRect.bottom);
        const visible = Math.max(0, visibleBottom - visibleTop);
        const proximity = 1 / (1 + Math.abs(rect.top - focusY));
        const score = visible * 0.7 + proximity * rootRect.height * 0.3;

        if (score > bestScore) {
          bestScore = score;
          bestId = feature.id;
        }
      });

      if (bestId) {
        setActiveId((prev) => (prev === bestId ? prev : bestId));
      }
    };

    root.addEventListener("scroll", updateActive, { passive: true });
    // Initial sync after layout
    requestAnimationFrame(updateActive);

    return () => {
      root.removeEventListener("scroll", updateActive);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, [features]);

  useEffect(() => {
    if (!activeId) return;
    const tab = tabRefs.current[activeId];
    if (!tab) return;

    const nav = leftFeatures.some((f) => f.id === activeId)
      ? leftNavRef.current
      : rightNavRef.current;
    if (!nav) return;

    const tabTop = tab.offsetTop;
    const tabBottom = tabTop + tab.offsetHeight;
    const viewTop = nav.scrollTop;
    const viewBottom = viewTop + nav.clientHeight;

    if (tabTop < viewTop + 6) {
      nav.scrollTo({ top: Math.max(0, tabTop - 8), behavior: "smooth" });
    } else if (tabBottom > viewBottom - 6) {
      nav.scrollTo({
        top: tabBottom - nav.clientHeight + 8,
        behavior: "smooth",
      });
    }
  }, [activeId, leftFeatures]);

  const scrollToFeature = (id) => {
    const el = panelRefs.current[id];
    const root = contentRef.current;
    if (!el || !root) return;

    setActiveId(id);
    isClickScrolling.current = true;

    const rootTop = root.getBoundingClientRect().top;
    const elTop = el.getBoundingClientRect().top;
    const nextTop = root.scrollTop + (elTop - rootTop);

    root.scrollTo({ top: nextTop, behavior: "smooth" });

    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  if (!features.length) return null;

  const stageHeight = `calc(100vh - ${HEADER_OFFSET}px)`;

  return (
    <>
      <div className="relative bg-white pt-12 lg:pt-16 pb-6">
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Platform capabilities
          </p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-slate-600">{subtitle}</p>
        </div>
      </div>

      <section
        className="relative z-20 bg-white"
        style={{ height: stageHeight }}
        aria-label="Feature explorer"
      >

        <div className="container relative z-10 h-full py-3 lg:py-4 flex flex-col min-h-0">
          <div className="lg:hidden mb-2 shrink-0">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeId === feature.id;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => scrollToFeature(feature.id)}
                    className={cn(
                      "shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 border-b-2 text-[12px] font-medium transition-all rounded-none",
                      isActive
                        ? "bg-white/70 text-primary-dark border-primary"
                        : "bg-white/40 text-slate-600 border-transparent",
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">{feature.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid flex-1 min-h-0 lg:grid-cols-[200px_minmax(0,1fr)_200px] xl:grid-cols-[220px_minmax(0,1fr)_220px] gap-3 xl:gap-4">
            <aside className="hidden lg:block min-h-0 h-full">
              <FeatureTabList
                features={leftFeatures}
                activeId={activeId}
                onSelect={scrollToFeature}
                tabRefs={tabRefs}
                navRef={leftNavRef}
                side="left"
              />
            </aside>

            <div
              ref={contentRef}
              className="min-h-0 h-full overflow-y-auto overscroll-y-auto scroll-smooth no-scrollbar space-y-5"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeId === feature.id;
                const imagePath = `/assets/${feature.image}`;
                const highlights = (feature.benefits || []).slice(0, 3);

                return (
                  <article
                    key={feature.id}
                    id={`feature-panel-${feature.id}`}
                    data-feature-id={feature.id}
                    ref={(el) => {
                      panelRefs.current[feature.id] = el;
                    }}
                    className={cn(
                      "min-h-full flex flex-col bg-white border border-slate-200/90 shadow-[0_12px_40px_-24px_rgba(15,28,51,0.35)] transition-all duration-500",
                      isActive
                        ? "border-primary/30 shadow-[0_18px_48px_-20px_rgba(38,103,204,0.35)]"
                        : "opacity-95",
                    )}
                    style={{ minHeight: "100%" }}
                  >
                    <div className="flex flex-col flex-1 p-5 md:p-7 lg:p-8 gap-6 md:gap-7">
                      {/* Feature number badge */}
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
                          <Icon className="w-3.5 h-3.5" />
                          Feature {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          of {String(features.length).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Heading + paragraph | Image */}
                      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start flex-1">
                        <div className="flex flex-col gap-4 min-w-0">
                          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                            {feature.description || feature.shortDescription}
                          </p>
                          <Link
                            to={`/features/${feature.slug}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group mt-auto pt-2 w-fit"
                          >
                            Learn more
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>

                        <div className="relative overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3] md:aspect-auto md:min-h-[240px] lg:min-h-[280px]">
                          <img
                            src={imagePath}
                            alt={feature.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = "none";
                              const fallback = e.target.nextElementSibling;
                              if (fallback) fallback.classList.remove("hidden");
                            }}
                          />
                          <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-primary/10 to-slate-100">
                            <Icon className="w-14 h-14 text-primary/40" />
                          </div>
                        </div>
                      </div>

                      {/* Three benefit points */}
                      <div className="grid sm:grid-cols-3 gap-3 pt-5 border-t border-slate-200">
                        {highlights.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex gap-2.5 p-3 bg-slate-50/80 border border-slate-100"
                          >
                            <span className="mt-0.5 w-5 h-5 bg-primary/10 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-primary" />
                            </span>
                            <div className="min-w-0">
                              <p className="text-slate-900 font-semibold text-sm leading-snug">
                                {benefit.title}
                              </p>
                              {benefit.description && (
                                <p className="text-slate-500 text-xs mt-1 leading-relaxed line-clamp-2">
                                  {benefit.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="hidden lg:block min-h-0 h-full">
              <FeatureTabList
                features={rightFeatures}
                activeId={activeId}
                onSelect={scrollToFeature}
                tabRefs={tabRefs}
                navRef={rightNavRef}
                side="right"
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
