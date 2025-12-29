function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}
//_____________________________________
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
//________________________________________
function orderChai(size) {
    if (size === "small") {
        return `samll cutting chai...`;
    }
    if (size === "medium" || size === "large") {
        return `Make extra chai`;
    }
    return `chai order #${size}`;
}
//________________________________________
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cutting Chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.suger} suger!`;
    }
    return ` Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return `Elaichi Chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
export {};
//________________________________________
//# sourceMappingURL=typeNarrowing.js.map