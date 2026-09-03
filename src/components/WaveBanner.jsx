/* Header banner illustration — an original wave in the visual language
   of Edo-period woodblock prints (bold outline, flat color bands, claw-
   shaped foam), staged like a JAL/JNR travel poster: sun, distant peak,
   one dominant swell. Not a reproduction of any specific existing work,
   but the composition follows the Great Wave off Kanagawa: dominant
   right-of-center swell, small distant peak (Fuji), three boats in the
   trough, claw-shaped foam at the crest and spray fingers hanging from
   the curl lip down toward the boats.

   Colors come from the --wave-* tokens in index.css, which are a
   dedicated sub-palette (see the file's header comment) — separate
   from --ink/--panel/--brass/--wine, which are tuned for a different
   part of the site's palette. Foam and the peak's snow-cap reuse
   --parchment directly, the same "palest neutral" role. */
export default function WaveBanner({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stylized ocean wave illustration in the manner of Edo-period woodblock prints, with a small mountain peak in the distance"
      className={className}
    >
      {/* sky */}
      <rect x="0" y="0" width="1200" height="500" fill="var(--wave-sky)" />

      {/* sun disc, low and right, JAL-poster style */}
      <circle cx="960" cy="150" r="86" fill="var(--wave-sun)" />

      {/* ── Mt. Fuji, distant and small, right-of-center ──
         A proper cone with a concave base curve (not a triangle),
         a horizontal snow line, and a sharper snowcap at the peak. */}
      <g>
        {/* Mountain body — concave base, asymmetric slopes */}
        <path
          d="M 820 300
             Q 870 230, 905 200
             Q 935 175, 940 165
             Q 945 175, 975 200
             Q 1010 230, 1060 300
             Z"
          fill="var(--wave-peak)"
        />
        {/* Snow line — a horizontal stroke across the upper portion
            that defines the snowcap boundary */}
        <path
          d="M 905 215 Q 920 200, 940 195 Q 960 200, 975 215"
          fill="none"
          stroke="var(--parchment)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Snowcap — a small filled wedge at the peak */}
        <path
          d="M 922 195 L 940 165 L 958 195 L 950 200 L 940 188 L 930 200 Z"
          fill="var(--parchment)"
        />
      </g>

      {/* far background swell, flat and pale, establishes depth */}
      <path
        d="M 0 340
           C 120 310, 260 310, 380 335
           C 500 360, 620 360, 740 330
           C 860 305, 980 310, 1200 340
           L 1200 500 L 0 500 Z"
        fill="var(--wave-water-deep)"
        opacity="0.55"
      />

      {/* foreground small wave, left, breaking toward viewer */}
      <path
        d="M 0 400
           C 60 370, 110 365, 150 385
           C 175 397, 165 415, 130 418
           C 155 410, 190 405, 220 415
           C 200 430, 150 440, 90 435
           C 40 431, 0 425, 0 425 Z"
        fill="var(--wave-ink)"
      />
      <path
        d="M 0 400
           C 60 372, 108 368, 148 386
           C 170 396, 162 410, 132 413
           C 158 406, 188 402, 215 411
           C 196 424, 150 432, 92 428
           C 44 424, 0 420, 0 420 Z"
        fill="var(--wave-water-mid)"
      />
      <path
        d="M 40 388 C 60 380, 90 380, 110 390 C 95 392, 75 393, 60 396 C 50 393, 44 390, 40 388 Z"
        fill="var(--parchment)"
      />

      {/* ── THE GREAT SWELL — main subject, right of center ──
         One mass that rises, hooks over at the top, and curls back
         down into a claw — not stepped ridges. Crest tapers into ONE
         claw tip; no secondary bubble lobe. */}

      {/* ink outline body */}
      <path
        d="M 420 500
           L 420 400
           C 420 330, 445 270, 500 225
           C 555 180, 630 155, 705 155
           C 760 155, 805 170, 830 200
           C 845 218, 848 240, 838 258
           C 826 280, 798 292, 768 288
           C 792 300, 806 320, 800 344
           C 794 368, 770 384, 744 380
           C 748 372, 748 362, 742 354
           C 730 338, 710 332, 692 336
           C 690 314, 678 292, 656 278
           C 626 258, 588 254, 552 268
           C 510 284, 472 314, 445 352
           C 428 376, 420 400, 420 424
           Z"
        fill="var(--wave-ink)"
      />

      {/* deep blue fill, inset from the ink outline */}
      <path
        d="M 434 500
           L 434 402
           C 434 336, 458 280, 508 238
           C 558 196, 626 174, 694 174
           C 742 174, 780 188, 800 214
           C 811 228, 813 244, 805 258
           C 795 274, 774 283, 750 280
           C 770 290, 782 308, 777 328
           C 772 349, 752 363, 730 360
           C 733 353, 733 344, 728 337
           C 718 324, 701 319, 686 322
           C 684 303, 674 285, 656 273
           C 630 256, 598 253, 568 265
           C 532 279, 500 306, 476 340
           C 461 361, 452 382, 452 404
           Z"
        fill="var(--wave-water-deep)"
      />

      {/* mid-tone teal band, further inset — the flat-shape "gradient" */}
      <path
        d="M 448 500
           L 448 404
           C 448 348, 468 300, 512 264
           C 556 228, 614 210, 670 210
           C 710 210, 740 222, 756 244
           C 764 256, 765 268, 758 279
           C 749 291, 733 298, 714 296
           C 730 304, 740 318, 736 334
           C 732 351, 716 362, 698 360
           C 700 354, 700 347, 696 341
           C 688 331, 675 327, 663 330
           C 662 315, 654 301, 640 292
           C 620 279, 596 277, 574 286
           C 546 297, 522 318, 504 344
           C 492 362, 484 380, 484 398
           Z"
        fill="var(--wave-water-mid)"
      />

      {/* ── The hollow curl ──
         A small negative-space ellipse inside the swell, in the
         wave-sky color, so the sky shows through the curl. This
         is the most iconic feature of the Hokusai composition. */}
      <ellipse
        cx="740"
        cy="240"
        rx="34"
        ry="22"
        transform="rotate(-15 740 240)"
        fill="var(--wave-sky)"
      />
      {/* Inner curl highlight — a thin parchment ring around the
         hollow that gives the curl some thickness/depth */}
      <ellipse
        cx="740"
        cy="240"
        rx="34"
        ry="22"
        transform="rotate(-15 740 240)"
        fill="none"
        stroke="var(--parchment)"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />

      {/* foam claws along the top of the swell, the signature Hokusai
          motif — following the hooked crest as it rises then curls over */}
      <g fill="var(--parchment)">
        <path d="M 520 222 C 528 210, 542 205, 554 210 C 543 210, 533 214, 527 224 C 524 224, 522 223, 520 222 Z" />
        <path d="M 560 196 C 570 184, 586 180, 598 186 C 586 185, 575 189, 567 200 C 564 198, 562 197, 560 196 Z" />
        <path d="M 610 173 C 621 161, 638 158, 651 165 C 638 163, 626 166, 617 177 C 615 175, 612 174, 610 173 Z" />
        <path d="M 665 160 C 678 150, 695 148, 708 156 C 695 153, 682 155, 673 165 C 670 163, 668 161, 665 160 Z" />
        <path d="M 722 156 C 736 148, 753 148, 765 157 C 752 153, 739 155, 730 165 C 727 162, 724 159, 722 156 Z" />
        <path d="M 774 165 C 789 159, 805 161, 816 172 C 803 167, 789 168, 780 177 C 777 173, 775 169, 774 165 Z" />
        <path d="M 810 190 C 825 185, 841 189, 850 201 C 837 194, 823 195, 813 203 C 811 199, 810 195, 810 190 Z" />
        <path d="M 826 224 C 841 221, 856 227, 863 240 C 851 232, 836 232, 827 239 C 826 234, 825 229, 826 224 Z" />
      </g>

      {/* ── Downward spray fingers ──
         The Hokusai signature — claw-finger foam reaching DOWN
         from the curl lip into the trough where the boats ride.
         Six tapering lines hanging from the curl toward the boats. */}
      <g fill="none" stroke="var(--parchment)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 720 260 C 716 280, 712 300, 710 320" strokeWidth="2.4" />
        <path d="M 705 268 C 700 286, 696 304, 694 322" strokeWidth="2.2" />
        <path d="M 690 274 C 686 292, 682 308, 680 326" strokeWidth="2" />
        <path d="M 675 282 C 670 298, 666 312, 664 328" strokeWidth="1.8" />
        <path d="M 660 290 C 656 304, 652 316, 650 330" strokeWidth="1.6" />
        <path d="M 645 298 C 642 310, 638 320, 636 332" strokeWidth="1.4" />
      </g>

      {/* Spray droplets at the tips of the downward fingers */}
      <g fill="var(--parchment)">
        <circle cx="710" cy="322" r="3" />
        <circle cx="694" cy="324" r="2.5" />
        <circle cx="680" cy="328" r="2.2" />
        <circle cx="664" cy="330" r="2" />
        <circle cx="650" cy="332" r="1.8" />
        <circle cx="636" cy="334" r="1.5" />
      </g>

      {/* foam scatter beneath the crest, small trailing droplets */}
      <g fill="var(--parchment)">
        <circle cx="520" cy="248" r="5" />
        <circle cx="548" cy="228" r="4" />
        <circle cx="585" cy="208" r="5" />
        <circle cx="630" cy="188" r="4" />
        <circle cx="678" cy="176" r="5" />
        <circle cx="730" cy="174" r="4" />
        <circle cx="780" cy="184" r="5" />
        <circle cx="820" cy="208" r="4" />
        <circle cx="836" cy="242" r="5" />
        <circle cx="806" cy="278" r="4" />
      </g>

      {/* ── Three boats in the trough ──
         The Hokusai signature — small boats being tossed in the
         trough between Fuji and the wave. Crescent-shaped hulls
         with a few oars/masts. Positioned in the lower-left half,
         in the space between the foreground wave and the great
         swell. */}
      <g fill="none" stroke="var(--wave-ink)" strokeLinecap="round" strokeLinejoin="round">
        {/* Boat 1 — leftmost, slightly distant */}
        <path d="M 240 380 Q 268 372, 296 380 Q 282 386, 268 386 Q 254 386, 240 380 Z" strokeWidth="2" />
        <line x1="262" y1="378" x2="262" y2="362" strokeWidth="1.4" />
        <line x1="270" y1="378" x2="270" y2="362" strokeWidth="1.4" />
        <line x1="278" y1="378" x2="278" y2="362" strokeWidth="1.4" />

        {/* Boat 2 — center, larger, in front of Fuji */}
        <path d="M 310 395 Q 348 384, 386 395 Q 368 403, 348 403 Q 328 403, 310 395 Z" strokeWidth="2.2" />
        <line x1="338" y1="392" x2="338" y2="370" strokeWidth="1.6" />
        <line x1="348" y1="392" x2="348" y2="370" strokeWidth="1.6" />
        <line x1="358" y1="392" x2="358" y2="370" strokeWidth="1.6" />

        {/* Boat 3 — center-right, under the spray fingers */}
        <path d="M 540 405 Q 568 396, 596 405 Q 582 412, 568 412 Q 554 412, 540 405 Z" strokeWidth="2" />
        <line x1="560" y1="402" x2="560" y2="384" strokeWidth="1.4" />
        <line x1="568" y1="402" x2="568" y2="384" strokeWidth="1.4" />
        <line x1="576" y1="402" x2="576" y2="384" strokeWidth="1.4" />
      </g>

      {/* base water plane tying it together */}
      <path
        d="M 0 430
           C 200 415, 400 420, 600 405
           C 750 393, 900 400, 1200 385
           L 1200 500 L 0 500 Z"
        fill="var(--wave-water-deep)"
        opacity="0.4"
      />
    </svg>
  )
}
