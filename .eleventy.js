module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
 
    // Custom date filter
    eleventyConfig.addFilter("dateFilter", (dateObj) => {
        const d = new Date(dateObj);
        const day = d.getUTCDate();
        const year = d.getUTCFullYear();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const month = months[d.getUTCMonth()];

        return `${month} ${day}, ${year}`;
    });

    return {
        dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
        }
    };
};